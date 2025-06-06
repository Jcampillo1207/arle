import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const logoVariants = cva("w-auto h-full", {
  variants: {
    variant: {
      black: "fill-foreground",
      yellow: "fill-primary",
      white: "fill-background",
      tertiary: "fill-tertiary",
    },
  },
  defaultVariants: {
    variant: "black",
  },
});

export interface LogoProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof logoVariants> {}

export const Logo = React.forwardRef<SVGSVGElement, LogoProps>(
  ({ variant, className, ...props }) => {
    return (
      <svg
        className={cn(
          logoVariants({ variant }),
          className,
          "ease-in-out duration-300 transition-colors"
        )}
        viewBox="0 0 692 281"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M278.002 276.295V91.6343H334.636L336.009 129.39C343.56 102.961 357.29 91.6343 379.943 91.6343H396.075V139.344H379.6C350.425 139.344 337.039 148.268 337.039 175.041V276.295H278.002Z" />
        <path d="M464.519 276.295C431.568 276.295 412.347 261.193 412.347 223.78V32.5977H471.383V217.259C471.383 229.272 477.218 233.734 487.515 233.734H498.499V276.295H464.519Z" />
        <path d="M598.016 280.414C539.666 280.414 501.91 242.315 501.91 183.965C501.91 125.958 539.666 87.5154 597.673 87.5154C654.993 87.5154 691.033 126.301 691.033 188.427V199.41H562.663C563.692 225.153 577.765 237.51 599.046 237.51C614.148 237.51 625.132 231.675 629.594 217.602L688.63 221.034C678.333 259.477 644.01 280.414 598.016 280.414ZM631.653 165.773C630.28 141.403 617.237 129.39 597.673 129.39C578.108 129.39 564.722 142.776 562.663 165.773H631.653Z" />
        <path
          d="M75.0434 276.296H0V184.198L184.198 0H259.241V276.296H184.198V92.0988L75.0434 201.253V276.296Z"
          className="fill-primary"
        />
      </svg>
    );
  }
);

export const IconArle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="size-4"
    viewBox="0 0 260 277"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M75.0434 276.296H0V184.198L184.198 0H259.241V276.296H184.198V92.0988L75.0434 201.253V276.296Z"
      className="fill-primary"
    />
  </svg>
);

Logo.displayName = "Logo";
