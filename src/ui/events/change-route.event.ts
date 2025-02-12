import {defineTypedEvent} from 'element-vir';
import {JobAppFullRoute} from '../../data/router.js';

export const ChangeRouteEvent = defineTypedEvent<Partial<JobAppFullRoute>>()('change-route');
