import type { PropsWithChildren, ReactNode } from 'react';
import './ExampleBodyText.css';

export const ExampleBodyText = ({ children }: PropsWithChildren) => <div className="example-body-text">{children}</div>;

export const ExampleBodyTextDecorator = (Story: () => ReactNode) => <ExampleBodyText>{Story()}</ExampleBodyText>;
