interface BgAnimationProps {
	currSection: HTMLDivElement | null
}

type fn = () => void
type Ctx = CanvasRenderingContext2D
type Cnv = HTMLCanvasElement
type Section = HTMLDivElement
type Img = HTMLImageElement

type DrawText = (ctx: Ctx, str: string, centerX: number, centerY: number, radius: number, angle: number) => void
type SetRatio = (cnv: Cnv, currSection: Section) => void
type ClearRect = (cnv: Cnv, ctx: Ctx) => void
type Anim = (cnv: Cnv, ctx: CanvasRenderingContext2D, bgImg: Img) => fn
type HandleResize = (cnv: Cnv, currSection: Section, ctx: Ctx, bgImg: Img) => fn
type IniAnim = (cnv: Cnv, ctx: Ctx, currSection: Section, bgImg: Img) => void