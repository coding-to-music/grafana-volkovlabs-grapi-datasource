import { SelectableValue } from '@grafana/data';
import { Messages } from './messages';

/**
 * Request Type Values
 */
export enum RequestType {
  ALERT_RULES = 'alertRules',
  ANNOTATIONS = 'annotations',
  DATASOURCES = 'datasources',
  HEALTH = 'health',
  NONE = 'none',
}

/**
 * Request Type
 *
 * @type {SelectableValue[]}
 */
export const RequestTypeOptions: SelectableValue[] = [
  {
    label: 'Alert Rules',
    description: Messages.requestAlertRules,
    value: RequestType.ALERT_RULES,
  },
  {
    label: 'Annotations',
    description: Messages.requestAnnotations,
    value: RequestType.ANNOTATIONS,
  },
  {
    label: 'Data Sources',
    description: Messages.requestDataSources,
    value: RequestType.DATASOURCES,
  },
  {
    label: 'Health information',
    description: Messages.requestHealth,
    value: RequestType.HEALTH,
  },
  {
    label: 'None',
    description: Messages.requestNone,
    value: RequestType.NONE,
  },
];
