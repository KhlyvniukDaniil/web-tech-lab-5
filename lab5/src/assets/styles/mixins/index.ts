export const vw = (pxValue: number, isMob: boolean = false): string => {
	const LAYOUT_WIDTH = isMob ? 360 : 1600

	const valueInVw = (pxValue / LAYOUT_WIDTH) * 100

	return `${ valueInVw }vw`
}
export const columnGap = (isMob: boolean = false) => vw(30, isMob)

export const headerHeight = (isMob: boolean = false) => isMob ? vw(80.66, isMob) : vw(128, isMob)

export const grid = (
	{
		col = 12,
		colSize = '1fr',
		gap = `${ columnGap() }`,
		row,
		rowSize,
		rowGap,
		colGap,
	}: GridMixinProps
) => `
		display: grid;
		grid-template-columns: repeat(${ col }, ${ colSize });
		grid-gap: ${ gap };
    ${ colGap ? `grid-column-gap: ${ colGap ? colGap : gap }` : '' };
	  ${ rowGap ? `grid-row-gap: ${ rowGap ? rowGap : gap }` : '' };
		${ row ? `grid-template-rows: repeat(${ row }, ${ rowSize ? rowSize : '1fr' })` : '' };
`

export const gridCol = (colStart: number, colEnd: number) => `
    grid-column-start: ${ colStart };
    grid-column-end: ${ colEnd };
`

export const gridRow = (rowStart: number, rowEnd: number) => `
    grid-row-start: ${ rowStart };
    grid-row-end: ${ rowEnd };
`

export const outfitRegular: fontMixin = (fontSizeInPx, color, lineHeightInPx, isMob) => (`
	font-family: "Outfit Medium", sans-serif;
	font-size: ${ vw(fontSizeInPx, isMob) };
	line-height: ${ lineHeightInPx ? vw(lineHeightInPx, isMob) : vw(fontSizeInPx, isMob) };
	font-weight: 400;
	${ color ? `color: ${ color };` : '' }
`)

export const outfitMedium: fontMixin = (fontSizeInPx, color, lineHeightInPx, isMob) => (`
	font-family: "Outfit Medium", sans-serif;
	font-size: ${ vw(fontSizeInPx, isMob) };
	line-height: ${ lineHeightInPx ? vw(lineHeightInPx, isMob) : vw(fontSizeInPx, isMob) };
	font-weight: 500;
	${ color ? `color: ${ color };` : '' }
`)

export const outfitBold: fontMixin = (fontSizeInPx, color, lineHeightInPx, isMob) => (`
	font-family: "Outfit Bold", sans-serif;
	font-size: ${ vw(fontSizeInPx, isMob) };
	line-height: ${ lineHeightInPx ? vw(lineHeightInPx, isMob) : vw(fontSizeInPx, isMob) };
	font-weight: 700;
	${ color ? `color: ${ color };` : '' }
`)

export const interMedium: fontMixin = (fontSizeInPx, color, lineHeightInPx, isMob) => (`
	font-family: "Inter Medium", sans-serif;
	font-size: ${ vw(fontSizeInPx, isMob) };
	line-height: ${ lineHeightInPx ? vw(lineHeightInPx, isMob) : vw(fontSizeInPx, isMob) };
	font-weight: 500;
	${ color ? `color: ${ color };` : '' }
`)

export const interExtraBold: fontMixin = (fontSizeInPx, color, lineHeightInPx, isMob) => (`
	font-family: "Inter ExtraBold", sans-serif;
	font-size: ${ vw(fontSizeInPx, isMob) };
	line-height: ${ lineHeightInPx ? vw(lineHeightInPx, isMob) : vw(fontSizeInPx, isMob) };
	font-weight: 800;
	${ color ? `color: ${ color };` : '' }
`)

