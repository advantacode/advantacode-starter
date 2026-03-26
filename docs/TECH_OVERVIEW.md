# Tech Overview

This starter is the frontend counterpart to the Laravel API starter.

The goal is not just to provide Vue boilerplate. The goal is to provide a frontend structure that can grow by domain in parallel with the backend template and support predictable project automation.

## Stack

- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia
- Axios
- Tailwind CSS
- Brand token generation with `@advantacode/brander`

## Frontend Structure

- `src/app`
  Bootstrapping, layouts, and router assembly.
- `src/domains`
  Domain route modules and domain-specific views.
- `src/support`
  Shared navigation, utilities, and future cross-domain frontend support code.
- `src/_generated/brand`
  Generated brand tokens and theme output.

## Request And Feature Flow

Typical feature flow:

1. A frontend domain defines its route module.
2. Views render the workflow for that domain.
3. Stores or composables manage state and API interaction.
4. Shared app infrastructure stays in `src/app` and `src/support`.
5. Backend and frontend domains evolve together instead of independently.

## Why Domain-Based On The Frontend

- It aligns naturally with the backend domain model.
- It makes future automation and scaffolding more predictable.
- It avoids a large, flat `views` directory that becomes hard to evolve.
- It provides a stable place to evolve coordinated frontend slices.
