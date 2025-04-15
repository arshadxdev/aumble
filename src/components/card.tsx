import React, { ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
  title: string;
  description: string;
};

function Card({ children, title, description }: CardProps) {
  return (
    <div className="relative overflow-auto rounded-lg border bg-background p-2">
      <div className="flex h-[180px] flex-col rounded-md p-6 gap-4">
        {children}
        <div className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
