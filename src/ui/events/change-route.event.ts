import {defineTypedEvent} from 'element-vir';
import {JobAppRoute} from '../../data/router.js';

export const ChangeRouteEvent = defineTypedEvent<Partial<JobAppRoute>>()('change-route');
