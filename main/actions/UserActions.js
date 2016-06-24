import assign from 'object-assign'
import KeyMirror from 'keymirror'
import { ActionPrototype, Dispatcher } from 'fluxxed_up'
import { fetch } from '../lib/webApi'

var UserActions = assign({}, ActionPrototype, {
  Types: KeyMirror({
    GOT_USER_DATA: null,
    DID_UPDATE_USER: null,
    REGISTER_USER: null,
    LOGIN_USER: null,
    UPDATE_USER: null,
    LOGOUT_USER: null,
    CREATE_BUCKETLIST: null,
    GET_ALL_BUCKETLISTS: null,
    GET_SINGLE_BUCKETLIST: null,
    UPDATE_BUCKETLIST: null,
    DELETE_BUCKETLIST: null,
    GET_BUCKETLIST_ITEM: null,
    CREATE_BUCKETLIST_ITEM: null,
    UPDATE_BUCKETLIST_ITEM: null,
    DELETE_BUCKETLIST_ITEM: null
  }),
  getUserData() {
    fetch('http://localhost:3000/v1/users', null, UserActions.Types.GOT_USER_DATA)
  },
  updateUserData(data) {
    post('http://localhost:3000/v1/users', data, UserActions.Types.DID_UPDATE_USER)
  },
  registerUser(data) {
    post('https://beebuckets.herokuapp.com/v1/users', data, UserActions.Types.REGISTER_USER)
  },
  loginUser(data) {
    post('https://beebuckets.herokuapp.com/v1/auth/login', data, UserActions.Types.LOGIN_USER)
  },
  updateUser(data) {
    put('https://beebuckets.herokuapp.com/v1/auth/login', data, UserActions.Types.UPDATE_USER)
  },
  logoutUser() {
    get('https://beebuckets.herokuapp.com/v1/auth/logout', null, UserActions.Types.LOGOUT_USER)
  },
  createBucketlist(data) {
    post('https://beebuckets.herokuapp.com/v1/bucketlists', data, UserActions.Types.LOGOUT_USER)
  },
  getAllBucketlists() {
    post('https://beebuckets.herokuapp.com/v1/bucketlists', null, UserActions.Types.GET_ALL_BUCKETLISTS)
  },
  getBucketlist(id) {
    get('https://beebuckets.herokuapp.com/v1/bucketlists/'+id, null, UserActions.Types.GET_SINGLE_BUCKETLIST)
  },
  updateBucketlist(id) {
    put('https://beebuckets.herokuapp.com/v1/bucketlists/'+id, null, UserActions.Types.UPDATE_BUCKETLIST)
  },
  deleteBucketlist(id) {
    delete('https://beebuckets.herokuapp.com/v1/bucketlists/'+id, null, UserActions.Types.DELETE_BUCKETLIST)
  },
  createBucketlistItem(bucket_id, data) {
    post('https://beebuckets.herokuapp.com/v1/bucketlists/'+bucket_id+'/items', data, UserActions.Types.CREATE_BUCKETLIST_ITEM)
  },
  getBucketlistItem(bucket_id, item_data){
    get('https://beebuckets.herokuapp.com/v1/bucketlists/'+bucket_id+'/items'+item_id, null, UserActions.Types.GET_BUCKETLIST_ITEM)
  },
  updateBucketlistItem(bucket_id, item_id, data) {
    put('https://beebuckets.herokuapp.com/v1/bucketlists/'+bucket_id+'/items'+item_id, data, UserActions.Types.UPDATE_BUCKETLIST_ITEM)
  },
  deleteBucketlistItem(bucket_id, item_id, data) {
    delete('https://beebuckets.herokuapp.com/v1/bucketlists/'+bucket_id+'/items'+item_id, null, UserActions.Types.UPDATE_BUCKETLIST_ITEM)
  }
})

module.exports = UserActions
