export interface TokenProps {
  id: string;
  user_id: string;
  token_encrypted: string;
  expires_at: Date;
  login_at: Date;
}

export interface CreateTokenInputs{
    user_id:string,
    token_encrypted:string
}

export interface TokenTypes{
  access_token:string,
  refresh_token:string
}