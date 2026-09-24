// Web Audio API Synthesizer for Arcade Civil Engineering Quick Fire sound effects

class SoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;

  constructor() {
    // Read user sound preference
    const saved = localStorage.getItem('civil_quiz_sound_enabled');
    if (saved !== null) {
      this.isMuted = saved === 'false';
    }
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    localStorage.setItem('civil_quiz_sound_enabled', String(!this.isMuted));
    if (!this.isMuted) {
      this.playBeep(440, 0.08, 'sine', 0.15);
    }
    return !this.isMuted;
  }

  public getSoundEnabled(): boolean {
    return !this.isMuted;
  }

  private playTone(freq: number, duration: number, type: OscillatorType = 'sine', gainVal: number = 0.2, delay: number = 0) {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + delay + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + delay);
      osc.stop(this.ctx.currentTime + delay + duration + 0.05);
    } catch {
      // Audio context might be restricted before user gesture
    }
  }

  public playBeep(freq = 520, duration = 0.12, type: OscillatorType = 'sine', gain = 0.15) {
    this.playTone(freq, duration, type, gain);
  }

  public countdownTick() {
    this.playTone(480, 0.09, 'sine', 0.25);
  }

  public countdownGo() {
    this.playTone(600, 0.08, 'triangle', 0.3, 0);
    this.playTone(880, 0.28, 'sine', 0.35, 0.06);
  }

  public buttonClick() {
    this.playTone(620, 0.04, 'sine', 0.15);
  }

  public answerClick() {
    this.playTone(380, 0.06, 'triangle', 0.18);
  }

  public timerWarning() {
    this.playTone(800, 0.05, 'square', 0.12);
  }

  public successSound() {
    this.playTone(523.25, 0.12, 'sine', 0.2, 0); // C5
    this.playTone(659.25, 0.12, 'sine', 0.22, 0.08); // E5
    this.playTone(783.99, 0.25, 'sine', 0.25, 0.16); // G5
  }

  public victoryFanfare() {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, idx) => {
      this.playTone(f, 0.22, 'triangle', 0.22, idx * 0.1);
    });
  }

  public bulldozerHonk() {
    // Dual tone industrial horn
    this.playTone(220, 0.25, 'sawtooth', 0.18, 0);
    this.playTone(277.18, 0.25, 'sawtooth', 0.18, 0);
    this.playTone(220, 0.35, 'sawtooth', 0.2, 0.12);
    this.playTone(277.18, 0.35, 'sawtooth', 0.2, 0.12);
  }

  public engineRev() {
    // Engine acceleration rumble
    this.playTone(95, 0.35, 'triangle', 0.25, 0);
    this.playTone(130, 0.45, 'sawtooth', 0.22, 0.1);
    this.playTone(190, 0.6, 'sawtooth', 0.2, 0.25);
  }
}

export const sound = new SoundManager();
