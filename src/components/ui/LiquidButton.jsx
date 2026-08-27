import React from "react"
import "./LiquidButton.css"

/**
 * LiquidButton Component
 * A button that fills on hover with a rising liquid wavy crest that ripples horizontally,
 * flipping the text/label color as the liquid crosses it.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Label or content inside button
 * @param {Function} [props.onClick] - Click event handler
 * @param {string} [props.className] - Additional CSS class
 * @param {'red'|'cyan'} [props.variant='red'] - Color theme ('red' for site theme, 'cyan' for original dark theme)
 * @param {string} [props.type='button'] - Button type attribute
 * @param {Object} [props.style] - Inline styles
 */
export default function LiquidButton({
  children,
  onClick,
  className = "",
  variant = "red",
  type = "button",
  style = {},
  ...rest
}) {
  const variantClass = variant === "cyan" ? "lqf-btn--cyan" : "lqf-btn--red"

  return (
    <div className="lqf-root">
      <button
        type={type}
        className={`lqf-btn ${variantClass} ${className}`}
        onClick={onClick}
        style={style}
        {...rest}
      >
        {/* Base Label (visible before liquid rises) */}
        <span className="lqf-label">{children}</span>

        {/* Liquid Fill Layer (grows from bottom to top on hover) */}
        <span className="lqf-fill" aria-hidden="true">
          <span className="lqf-fill-inner">
            <span className="lqf-label lqf-label--fill">{children}</span>
          </span>
        </span>

        {/* Dual Animated Rippling Wave Layer riding the crest */}
        <span className="lqf-wave" aria-hidden="true">
          <span className="lqf-wave-layer lqf-wave-a" />
          <span className="lqf-wave-layer lqf-wave-b" />
        </span>
      </button>
    </div>
  )
}
