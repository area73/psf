// Display
export const CanvasDisplay = ({
  doc,
  id,
  width,
  height
} = {
  doc:document,
  id:'canvas',
  width: 300,
  height:300,
})  => ({
  doc,
  canvas: () => this.doc.getElementById(id),
  ctx: () => this.canvas.getContext('2d'),
  width,
  height,
  id
});
