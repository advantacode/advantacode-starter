# Domain Workflow

This starter should follow the same domain-first process as the API starter.

## Rule Of Thumb

If the backend adds a domain like `People`, the frontend should usually add a matching `people` domain instead of scattering files across unrelated folders.

## Frontend Domain Shape

Recommended starting shape:

```text
src/
  domains/
    people/
      routes.ts
      views/
      components/
      composables/
      stores/
```

Only add folders that the domain actually needs.

## What Belongs Where

- Route definitions belong in the domain
- Domain-specific views belong in the domain
- Domain-specific stores or composables belong in the domain
- Shared app shell and router bootstrapping belong in `src/app`
- Shared cross-domain code belongs in `src/support`

## Coordination With The API Starter

Try to keep these aligned:

- Domain names
- Resource names
- Route naming conventions
- Auth assumptions
- API response contracts

That alignment keeps frontend and backend templates predictable as new domains are added.
