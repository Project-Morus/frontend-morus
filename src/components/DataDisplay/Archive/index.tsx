import { IArchiveProps, VariantsTypes } from "./types";
import { ReactNode } from "react";
import { ArchiveLarge, ArchiveSmall } from "./variants";

const Archive = ({ variant = 'large', ...props }: IArchiveProps) => {
  const variantType: Record<VariantsTypes, ReactNode> = {
    large: <ArchiveLarge {...props} />,
    small: <ArchiveSmall {...props} />,
  };

  return variantType[variant];
}

export default Archive;