import { Component } from '@angular/core';
import {EditorConfig} from './config/EditorConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  /**
   * editor的配置参数信息
   */
  config: EditorConfig;

  /**
   * markdown的内容
   */
  markdown: string;

  constructor() {
    this.config = new EditorConfig({height: 'calc(100vh - 71px)'});
    this.markdown = '测试内容';
  }
}
