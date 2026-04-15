# Tiered Discount Function

This Shopify Function applies a percentage discount based on the cart subtotal.

## Logic
- 10% discount for carts ≥ R1000
- 15% discount for carts ≥ R3000
- 20% discount for carts ≥ R7000

## Behavior
Only the highest applicable discount is applied. Discounts do not stack.

## Example
- Cart = R800 → No discount
- Cart = R1500 → 10% discount
- Cart = R4000 → 15% discount
- Cart = R8000 → 20% discount

## Files
- index.js → Discount logic
- run.graphql → Input query
- shopify.extension.toml → Configuration

## Notes
This function simulates Shopify’s automatic discount system using custom logic.