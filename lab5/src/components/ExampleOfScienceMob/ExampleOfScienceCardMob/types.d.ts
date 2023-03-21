import { ReactNode } from 'react'


interface ExampleOfScienceCardProps {
	icon: ReactNode;
	text: string;
	iconAlign?: 'flex-start' | 'flex-end' | 'center' | 'initial';
	cardAlign?: 'flex-start' | 'flex-end' | 'center' | 'initial';
}
