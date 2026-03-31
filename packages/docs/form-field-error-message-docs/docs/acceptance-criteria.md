<!-- @license CC0-1.0 -->

# Acceptatiecriteria voor het maken van de Form Field Error Message component

## Semantiek

Dit zijn de acceptatiecriteria welke HTML elementen en HTML attributen het beste zijn voor deze component.

### Welke HTML elementen het beste zijn voor deze component

#### Must Have elementen

- De Form Field Error Message is opgemaakt met het `div` element.

#### Could Have elementen

- De Form Field Error Message mag een inhoud bevatten welke bestaat in de vorm van een `p` element en [phrasing content](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content-0).

### Welke HTML attributen het beste zijn voor deze component

#### Must Have attributen

- De Form Field Error Message bevat altijd een `id` attribuut, zodat het met `aria-describedby` attribuut aan het input-element gekoppeld kan worden.
- De Form Field Error Message gebruikt geen `tabindex` attribuut, de component is ondersteunend, niet interactief.
- Het input-element bevat een `aria-invalid="true"` attribuut wanneer de error zichtbaar is.
- De Form Field Error Message inhoud is alleen zichtbaar en toegankelijk wanneer er een fout is.
- Wanneer de tekst in realtime wordt ingevuld, is de Form Field Error Message component altijd aanwezig in de DOM en in de accessibility tree.

#### Could Have attributen

- Wanneer de tekst in realtime wordt ingevuld, maakt de Form Field Error Message gebruik van `role="alert"` attribuut.
