# @nl-design-system-candidate/data-badge-react

## 1.1.5

### Patch Changes

- 0097f83: Add missing devDependencies so the package can be built on its own.

  Replace clsx with a oneliner equivalent.

  Internally simplify DataBadgeProps and fix an error where the value attribute for `<data>` came from
  `DataHTMLAttributes<HTMLTimeElement>['value']` instead of `DataHTMLAttributes<HTMLDataElement>['value']`.

## 1.1.4

### Patch Changes

- e7e6678: This was a version bump only for the @babel/runtime devDependency, there were no code changes.

## 1.1.3

### Patch Changes

- f0f7969: This was a version bump only for the @babel/runtime and @types/react devDependencies, there were no code changes.

## 1.1.2

### Patch Changes

- 22b8819: This was a version bump only for the @babel/runtime devDependency, there were no code changes.

## 1.1.1

### Patch Changes

- 2bfe909: Add provenance

## 1.1.0

### Minor Changes

- de9ba46: Improve debugging by adding `displayName`

## 1.0.0

### Major Changes

- 57cf13e: Initial release of Data Badge.
