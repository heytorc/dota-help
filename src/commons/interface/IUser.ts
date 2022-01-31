export default interface IUser {
  steamid: number;
  account_id: number;
  username: string;
  name: string;
  profile: string;
  avatar: {
    small: string;
    medium: string;
    large: string;
  };
}