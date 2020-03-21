import { ItemResponse } from './item-response.model';
import { ItemAttributes } from './item-attributes.model';
import { Store } from './store.model';

export class Item {
  // tslint:disable-next-line: variable-name
  item_response: ItemResponse;
  // tslint:disable-next-line: variable-name
  item_attributes?: ItemAttributes;
  Stores: Store[];
}
