import { createSelector } from 'reselect';

/**
 * Direct selector to the frontDesk state domain
 */
const selectFrontDeskDomain = () => (state) => state.get('frontDesk');

/**
 * Other specific selectors
 */

const getView = () => createSelector(
  selectFrontDeskDomain(),
  (substate) => substate.get('view')
);

const getRoomsByStatus = () => createSelector(
  selectFrontDeskDomain(),
  (substate) => {
    const rooms = substate.get('rooms').toJS();
    return {
      all: rooms,
      inbound: rooms.filter(stay => stay.status === 'Inbound'),
      checkedin: rooms.filter(stay => stay.status === 'Checked In'),
      checkedout: rooms.filter(stay => stay.status === 'Checked Out'),
      available: rooms.filter(stay => stay.status === 'Available'),
    }
  }
);

const getFilter = (status) => createSelector(
  selectFrontDeskDomain(),
  (substate) => substate.get('filter')
)

const getDisplayAddRoom = () => createSelector(
  selectFrontDeskDomain(),
  (substate) => substate.get('displayAddRoom')
)

/**
 * Default selector used by FrontDesk
 */

const makeSelectFrontDesk = () => createSelector(
  selectFrontDeskDomain(),
  (substate) => substate.toJS()
);

export default makeSelectFrontDesk;

export {
  selectFrontDeskDomain,
  getView,
  getRoomsByStatus,
  getFilter,
  getDisplayAddRoom,
};
