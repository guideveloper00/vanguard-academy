type ISignature = {
  signatureTime: string;
  price: number;
  link: string;
};

export interface IServerSideProps {
  signatures: ISignature[];
}
