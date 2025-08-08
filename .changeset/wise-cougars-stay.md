---
'@nl-design-system-candidate/data-badge-react': patch
---

Add missing devDependencies so the package can be built on its own.

Replace clsx with a oneliner equivalent.

Internally simplify DataBadgeProps and fix an error where the value attribute for `<data>` came from
`DataHTMLAttributes<HTMLTimeElement>['value']` instead of `DataHTMLAttributes<HTMLDataElement>['value']`.
