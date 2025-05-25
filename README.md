# tsdown bug report

## Reproduction steps

1. Clone
2. `pnpm i`
3. `node --run build`
4. Check the generated files in `dist`

## Comparison with tsup

`node --run build:tsup` uses `tsup` instead of `tsdown`.

## Expected behavior

Only `index.d.ts` and `index.js` exist

## Actual behavior

Other files exist
