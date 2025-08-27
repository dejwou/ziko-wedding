export default class Countdown {
  private targetDate: Date;
  private interval: ReturnType<typeof setInterval> | undefined;
  private timeRef: Ref<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }>;

  constructor(target: Date) {
    this.targetDate = target;
    this.timeRef = ref({
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    });

    onMounted(() => this.start());
    onUnmounted(() => this.stop());
  }

  private update() {
    const now = Date.now();
    const diff = this.targetDate.getTime() - now;

    if (diff <= 0) {
      this.stop();
      this.timeRef.value = {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    this.timeRef.value = {
      days: d.toString().padStart(2, '0'),
      hours: h.toString().padStart(2, '0'),
      minutes: m.toString().padStart(2, '0'),
      seconds: s.toString().padStart(2, '0'),
    };
  }

  public start() {
    this.update();
    this.interval = setInterval(() => this.update(), 1000);
  }

  public stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  get days() {
    return this.timeRef.value.days;
  }

  get hours() {
    return this.timeRef.value.hours;
  }

  get minutes() {
    return this.timeRef.value.minutes;
  }

  get seconds() {
    return this.timeRef.value.seconds;
  }
}
