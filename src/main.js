'use strict';

import './sass/styles.scss';

import { activeFormListeners } from './scripts/form'

window.addEventListener('DOMContentLoaded', () => {
  activeFormListeners();
});