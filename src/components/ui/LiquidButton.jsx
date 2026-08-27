import React from "react"
import { Link } from "react-router-dom"
import "./LiquidButton.css"

/**
 * LiquidButton Component
 * A button (or link) that fills on hover with a rising liquid wavy crest that ripples horizontally,
 * flipping the text/label color as the liquid crosses it.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Label or content inside button
 * @param {Function} [props.onClick] - Click event handler
 * @param {string} [props.to] - Router Link destination
 * @param {string} [props.href] - Anchor href destination
 * @param {string} [props.className] - Additional CSS class
 * @param {'red'|'red-inverted'|'cyan'} [props.variant='red'] - Color theme
 * @param {string} [props.type='button'] - Button type attribute
 * @param {Object} [props.style] - Inline styles
 */
export default function LiquidButton({
  children,
  onClick,
  to,
  href,
  className = "",
  variant = "red",
  type = "button",
  style = {},
  ...rest
}) {
  const variantClass =
    variant === "red-inverted"
      ? "lqf-btn--red-inverted"
      : variant === "cyan"
      ? "lqf-btn--cyan"
      : "lqf-btn--red"

  const content = (
    <>
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
    </>
  )

  if (to) {
    return (
      <div className="lqf-root">
        <Link
          to={to}
          className={`lqf-btn ${variantClass} ${className}`}
          onClick={onClick}
          style={style}
          {...rest}
        >
          {content}
        </Link>
      </div>
    )
  }

  if (href) {
    return (
      <div className="lqf-root">
        <a
          href={href}
          className={`lqf-btn ${variantClass} ${className}`}
          onClick={onClick}
          style={style}
          {...rest}
        >
          {content}
        </a>
      </div>
    )
  }

  return (
    <div className="lqf-root">
      <button
        type={type}
        className={`lqf-btn ${variantClass} ${className}`}
        onClick={onClick}
        style={style}
        {...rest}
      >
        {content}
      </button>
    </div>
  )
}
