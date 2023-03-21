import { ReactNode } from 'react'


interface ExampleOfScienceCardProps {
	icon: ReactNode;
	text: string;
	iconAlign?: 'flex-start' | 'flex-end' | 'center' | 'initial';
	stickPosition?: StickPosition
	stickHeight?: string
	cardPosition: CardPosition
}

interface CardPosition {
	top: string;
	left?: string;
	right?: string;
}

interface StickPosition {
	top?: string | null | undefined;
	left?: string | null | undefined;
	right?: string | null | undefined;
	bottom?: string | null | undefined;
}