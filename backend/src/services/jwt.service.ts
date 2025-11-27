import Tokens from "../models/refreshtokens.model";

export const getSavedTokens = async (user_id: string) => {
    try {
        const tokens = await Tokens.findOne({ where: { user_id }, order: [['created_at', 'DESC']] });
        return tokens;
    } catch (error) {
        throw error;
    }
} 


export const deleteToken = async (user_id: string, token_encrypted: string) => {
  try {
     await Tokens.destroy({
      where: {
        user_id,
        token_encrypted,
      },
    });
  } catch (error) {
    throw error;
  }
};
