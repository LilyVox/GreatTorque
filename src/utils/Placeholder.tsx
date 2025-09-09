export interface placeholderStruct {
  id: string;
  width: string;
  height: string | null;
  bgColor: string | null;
  textColor: string | null;
  font: string | null;
  text: string | null;
}
export const Placeholder = ({ id, width, height, bgColor, textColor, font, text }: placeholderStruct) => {
  const thisFont = font?? 'playfair-display';
  const colorStruct = bgColor ? (textColor ? `/${bgColor + '/' + textColor}` : '') : '';
  const sizeStruct = height ? width + 'x' + height : width;
  const textStruct = text ? '&text' + text : '';

  return (
    <img
      id={id}
      alt={id}
      src={`https://placehold.co/${sizeStruct}${colorStruct}?font=${thisFont}${textStruct}`}
    />
  );
};
