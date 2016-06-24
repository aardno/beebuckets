import UserActions  from '../actions/UserActions'
import StorePrototype from '../../node_modules/fluxxed_up/src/lib/StorePrototype'
import { Dispatcher } from 'fluxxed_up'

var UserStore = StorePrototype()

module.exports = UserStore

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case UserActions.Types.GOT_USER_DATA:
      UserStore.receiveData(action.data)
      break
    case UserActions.Types.REGISTER_USER:

    case UserActions.Types.LOGIN_USER:

    case UserActions.Types.UPDATE_USER:

    case UserActions.Types.LOGOUT_USER:

  }
})
