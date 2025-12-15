import * as uuid from 'uuid';
import * as path from 'path';
import fs from 'fs';

class FileService {
  fileToBase64(buffer) {
    return buffer.toString('base64')
  }

  async saveFile(file) {
    try {
      console.log('FILE!!!', file)
      const base64Image = await this.fileToBase64(file)
      console.log('base64Image', base64Image)

      return base64Image;

    } catch (e) {
      console.error('Error in FileService.saveFile:', e);
      throw e;
    }
  }
}

export default new FileService();
