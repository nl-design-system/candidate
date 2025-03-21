# usage: jq -f filter.jq --arg key "components/component/nl" path/to/tokens.json
def is_css_property:
  type == "object" and has("$type");

def insert_property:
  if type == "object" then
    to_entries |
    map(
      .value |= insert_property |
      if .value |
        is_css_property then
        .value += { "__property": .key }
      end) |
    from_entries
  end;

def insert_extensions:
  walk(if is_css_property then
    if ."$type" == "color" then
      . + { "$extensions": { "nl.nldesignsystem.css-property-syntax": "<color>", "nl.nldesignsystem.figma-implementation": true }}
    elif ."$type" == "fontFamilies" then
      . + { "$extensions": { "nl.nldesignsystem.css-property-syntax": ["<family-name>", "<generic-name>"], "nl.nldesignsystem.figma-implementation": true }}
    elif ."$type" == "lineHeights" then
      . + { "$extensions": { "nl.nldesignsystem.css-property-syntax": ["<length>", "<number>"], "nl.nldesignsystem.figma-implementation": true }}
    elif ."$type" == "fontSizes" then
      . + { "$extensions": { "nl.nldesignsystem.css-property-syntax": ["<length>", "<percentage>"], "nl.nldesignsystem.figma-implementation": true }}
    elif ."$type" == "fontWeights" then
      . + { "$extensions": { "nl.nldesignsystem.css-property-syntax": "<number>", "nl.nldesignsystem.figma-implementation": true }}
    elif ."$type" == "textDecoration" then
      . + { "$extensions": { "nl.nldesignsystem.css-property-syntax": ["inherit", "none", "underline"], "nl.nldesignsystem.figma-implementation": true }}
    elif ."$type" == "dimension" then
      if ."__property" == "border-radius" then
        . + { "$extensions": { "nl.nldesignsystem.css-property-syntax": "<length-percentage>", "nl.nldesignsystem.figma-implementation": true }}
      # insert more exceptions for specific dimensions if needed
      else
        . + { "$extensions": { "nl.nldesignsystem.css-property-syntax": "<length>", "nl.nldesignsystem.figma-implementation": true }}
      end
    elif ."$type" == "other" then
      if ."__property" == "cursor" then
        . + { "$extensions": { "nl.nldesignsystem.css-property-syntax": ["<url>", "pointer", "*"], "nl.nldesignsystem.figma-implementation": false }}
      elif ."__property" == "text-decoration-thickness" then
        . + { "$extensions": { "nl.nldesignsystem.css-property-syntax": "<length>", "nl.nldesignsystem.figma-implementation": false }}
      elif ."__property" == "text-underline-offset" then
        . + { "$extensions": { "nl.nldesignsystem.css-property-syntax": "<length>", "nl.nldesignsystem.figma-implementation": false }}
      else
        . + { "$extensions": { "nl.nldesignsystem.css-property-syntax": "<unknown>", "nl.nldesignsystem.figma-implementation": false }}
      end
    end
  end);

def remove_property_and_value:
  walk(if is_css_property then del(."__property") | del(."$value") end);

{ "nl": .[$key].nl } |
insert_property |
insert_extensions |
remove_property_and_value
