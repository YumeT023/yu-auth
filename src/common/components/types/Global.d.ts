import { ComponentWithChild } from '../../../types/ComponentWithChild';

/*= === COLORS === */
export type Color = 'primary' | 'secondary' | 'warning';

/*= === WRAPPER ==== */
export type WrapperType = ComponentWithChild & {
  color?: Color;
}
