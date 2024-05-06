import { Fragment } from "react/jsx-runtime";
import Button from "./Button";

type CompanyProps = {
  companyList: string[];
  onFilter: (tag: string) => void;
};

export default function Hstag({ companyList, onFilter }: CompanyProps) {
  return (
    <header className="absolute right-0 flex flex-col gap-4 z-[999] ">
      {companyList.map((tag) => (
        <Fragment key={tag}>
          <Button onClick={() => onFilter(tag)}>#{tag} </Button>
        </Fragment>
      ))}
    </header>
  );
}
