import React from "react";

interface HTMLDivProps extends React.HTMLAttributes<HTMLDivElement> {
  data: string;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}
export const CKEditor: React.FC<HTMLDivProps> = ({ data }) => {
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
};
