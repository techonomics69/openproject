import {InputState} from 'reactivestates';
import {States} from '../states.service';
import {opServicesModule} from '../../angular-modules';

export class WorkPackageTableRefreshService {
  constructor(public states:States) {
  }

  /**
   * Request a refresh to the work package table.
   * @param visible Whether a loading indicator should be shown while changing
   * @param reason a reason for logging purposes.
   */
  public request(reason:string, visible:boolean = false, firstPage:boolean = false) {
    this.state.putValue([visible, firstPage], reason);
  }

  /**
   * Undo any potential pending refresh request
   */
  public clear(reason:string) {
    this.state.clear(reason);
  }

  public get state():InputState<boolean[]> {
    return this.states.table.refreshRequired;
  }
}

opServicesModule.service('wpTableRefresh', WorkPackageTableRefreshService);
