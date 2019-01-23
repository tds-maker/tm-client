import { post } from '../utils/http.helper'

export const signIn = (request) => post('sign-in')(request)