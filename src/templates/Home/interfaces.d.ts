export type ISignature = {
  signatureTime: string;
  price: number;
  link: string;
};

export type ITrails = {
  title: string;
  items: [
    {
      title: string;
      text: string;
      link: string;
      icon: "frontendIcon" | "backendIcon" | "databaseIcon" | "designIcon";
    }
  ];
};

export interface IServerSideProps {
  signatures: ISignature[];
  trails: ITrails[];
}

export interface IServerSidePropsIntroduction {
  signatures: ISignature[];
}

export interface IServerSidePropsTrails {
  trails: ITrails[];
}
