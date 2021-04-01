export type TreoMessageType = 'primary' | 'accent' | 'warn' | 'basic' | 'info' | 'success' | 'warning' | 'error';

export interface alertMessages{
  showAlert: boolean,
  typeMessage : TreoMessageType

}