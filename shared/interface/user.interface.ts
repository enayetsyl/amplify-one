
export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  companyName?: string;
  password: string;
  role:
    | 'Admin'
    | 'Moderator'
    | 'Observer'
    | 'Participant'
    | 'AmplifyAdmin'
    | 'AmplifyModerator'
    | 'AmplifyObserver'
    | 'AmplifyParticipant'
    | 'AmplifyTechHost';
  status: string;
  isEmailVerified: boolean;
  termsAccepted: boolean;
  termsAcceptedTime: Date;
  isDeleted: boolean;
  createdBy?: string;
  createdById?: string;
  credits: number;
  stripeCustomerId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
