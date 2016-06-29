export default function() {
  this.transition(
    this.hasClass('fade'),
    this.use('fade'),
    this.debug()
  );
}
