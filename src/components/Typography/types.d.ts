import { BaseColors } from './types.d';
import themes from "src/themes"


// Create a type on TypographyProps 
export type TextAlign = 'auto' | 'center' | 'justify' | 'left' | 'right'

export type FontFamily = keyof typeof themes.font_family

export type LineHeight = keyof typeof themes.line_height

export type FontSizeType = keyof typeof themes.font_size

export type Size = keyof typeof themes.font_size.body

export type FontSizes = 
  | 'body_xs'
  | 'body_sm'
  | 'body_md'
  | 'body_lg'
  | 'title_xs'
  | 'title_sm'
  | 'title_md'
  | 'title_lg'

export type TypeColors = keyof typeof themes.colors

export type BaseColors = keyof typeof themes.base

export type BrandColors = keyof typeof themes.colors.brand

export type color = keyof typeof BaseColors | BrandColors