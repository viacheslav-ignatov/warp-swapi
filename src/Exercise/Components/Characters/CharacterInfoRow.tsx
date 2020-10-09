import React, { FC } from "react";

interface CharacterInfoRowBoxProps {}

interface CharacterInfoRowProps {
  icon: string;
  label: string;
}

export const CharacterInfoRowBox: FC<CharacterInfoRowBoxProps> = ({
  children,
}) => <div className="flex flex-col px-3 divide-y">{children}</div>;

export const CharacterInfoRow: FC<CharacterInfoRowProps> = ({
  icon,
  label,
  children,
}) => (
  <div className="flex justify-between items-center py-2">
    <span className="font-bold" role="img" aria-label={label}>
      {icon} {label}:
    </span>
    {children}
  </div>
);
