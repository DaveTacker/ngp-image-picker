import { Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-test-library-wrapper',
  templateUrl: './test-library-wrapper.component.html',
  styleUrls: ['./test-library-wrapper.component.scss'],
})
export class TestLibraryWrapperComponent implements OnInit {
  config2: ImagePickerConf = {
    borderRadius: '8px',
    language: 'es',
    width: '300px',
    height: '300px',
    compressInitial: null,
  };
  initialImage: string = '../../assets/images/pexels-photo-842711.jpeg';

  constructor() {}

  ngOnInit(): void {}
}
