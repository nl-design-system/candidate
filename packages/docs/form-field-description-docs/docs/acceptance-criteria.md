<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Form Field Description component

## Semantiek

Dit zijn de acceptatiecriteria welke HTML elementen en HTML attributen het beste zijn voor deze component.

### Welke HTML elementen het beste zijn voor deze component

#### Must Have elementen

- De Form Field Description is opgemaakt met het `div` element.

#### Could Have elementen

- De Form Field Description mag een inhoud bevatten welke bestaat in de vorm van een `p` element en [phrasing content](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content-0) met uitzondering van [interactive content](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#interactive-content-0).

### Welke HTML attributen het beste zijn voor deze component

#### Must Have attributen

- De Form Field Description bevat altijd een `id` attribuut, zodat het met `aria-describedby` attribuut aan het input-element gekoppeld kan worden.
- De Form Field Description gebruikt geen `tabindex` attribuut, de component is ondersteunend, niet interactief.
