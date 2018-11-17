import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faDivide } from '@fortawesome/free-solid-svg-icons/faDivide';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faEquals } from '@fortawesome/free-solid-svg-icons/faEquals';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

import CalcContainer from './js/components/container/CalcContainer.jsx';
import './css/main.scss';

library.add(faMinus, faPlus, faDivide, faTimes, faEquals);

const id = document.getElementById('app');
ReactDOM.render(<CalcContainer />, id);
