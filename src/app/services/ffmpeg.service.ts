import { Injectable } from '@angular/core';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

@Injectable({
  providedIn: 'root',
})
export class FfmpegService {
  isReady = false;
  private ffmpeg;

  constructor() {
    // turn log ON to debug ffmpeg during development
    this.ffmpeg = createFFmpeg({ log: true });
  }

  async init() {
    if (this.isReady) {
      return;
    }

    await this.ffmpeg.load();
    // prevent file to reload
    this.isReady = true;
  }

  async getScreenshots(file: File) {
    // convert to binary data
    const data = await fetchFile(file);

    // store the file before running ffmpeg commands
    this.ffmpeg.FS('writeFile', file.name, data);

    // processing the file
    await this.ffmpeg.run(
      // Input
      // grab a specific file from FileSystem (FS()), can be access by their name
      '-i',
      file.name,
      // Output Options
      // configure the timestamp - format: hh:mm:ss
      '-ss',
      '00:00:01',
      // define how many frames to focus on to take the screenshot
      '-frames:v',
      '1',
      // the size of the image screenshot - it can be resized to a specific value - fn scale(width:height)
      // using '-1' will preserver the original aspect ratio from the uploaded video
      '-filter:v',
      'scale=510:-1',
      // Output
      'output_01.png'
    );
  }
}
