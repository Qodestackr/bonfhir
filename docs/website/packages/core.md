---
sidebar_position: 1
---

# Core

[![npm](https://img.shields.io/npm/v/@bonfhir/core)](https://www.npmjs.com/package/@bonfhir/core)

```bash npm2yarn
npm install @bonfhir/core
```

The `core` package provides primitives to easily manipulate FHIR resources.
It is also used as a common dependency for all other packages to rely on.

## FHIR types

All FHIR [resources](https://hl7.org/fhir/resourcelist.html) and [data types](https://hl7.org/fhir/datatypes.html)
typescript typings are included in the core package.
We currently support [R4B](https://hl7.org/fhir/R4B/index.html) and [R5](https://hl7.org/fhir/R5/index.html) - just use the right import path.

Official FHIR documentation is included as JSDoc, with links back to the FHIR documentation.

```typescript
import { Patient, Practionner, Claim, HumanName } from "@bonfhir/core/r4b";

declare const patient: Patient;
patient.name; // HumanName
```

### Builder and Narrative generator

The `build` function can build any FHIR Resource, and generate the appropriate narrative.  
Narratives are generated using resources elements that are marked with the
[**Σ** (`isSummary`) element definition](https://hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.isSummary).

```typescript
import { build } from "@bonfhir/core/r4b";

const patient = build("Patient", {
  name: [
    {
      given: ["John"],
      family: "Doe",
    },
  ],
});

console.log(patient.text);
// {status: 'generated', div: '<div xmlns="http://www.w3.org/1999/xhtml"><ul><li>…</span><ul><li>John Doe</li></ul></li></ul></div>'}
```

### References and ids

The `reference` function builds FHIR [literal references](https://hl7.org/fhir/references.html#literal) to other resources.
When possible, it also infers a proper `display` attribute automatically, based on the targeted resource.

```typescript
import { Patient, Organization, reference, Retrieved } from "@bonfhir/core/r4b";

declare const organization: Retrieved<Organization>;
declare const patient: Patient;

organization.name = "Acme, Inc";
patient.managingOrganization = reference(organization);
console.log(patient.managingOrganization);
// {reference: 'Organization/cce73d99-068c-4d12-9d69-60e2d2ef9ae7', type: 'Organization', display: 'Acme, Inc'}
```

Conversely, the `id` function can return a [resource id](https://hl7.org/fhir/R4B/resource-definitions.html#Resource.id)
for a resource or a reference to a resource.

```typescript
import { id } from "@bonfhir/core/r4b";

console.log(id(organization));
// cce73d99-068c-4d12-9d69-60e2d2ef9ae7

console.log(id(patient.managingOrganization));
// cce73d99-068c-4d12-9d69-60e2d2ef9ae7
```

The `canonical` function can build [Canonical URLs](https://hl7.org/fhir/references.html#canonical) for resources that
support this pattern.

```typescript
import { build, canonical } from "@bonfhir/core/r4b";

const questionnaire = build("Questionnaire", {
  url: "https://example.com/questionnaire",
  version: "2.1",
});

console.log(canonical(questionnaire));
// https://example.com/questionnaire|2.1
```

## FHIR Client

### Initialize

### CRUD

### Search builders

### Batch/Transaction builder

### Mergers

## Data Types Formatters

## Manipulating time - the duration API

## Extending FHIR resources

## Import in browser