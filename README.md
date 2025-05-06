# 🚍 Transit Analysis Webpage: Mapping Transit Friendliness in Boston Neighborhoods

This project visualizes sidewalk and bike path infrastructure across Boston to evaluate how accessible and walkable each neighborhood is. We introduce a custom **Transit Friendliness Index (TFI)**, combining spatial data on sidewalks and bike paths to measure transit infrastructure equity city-wide.

## 🌆 Introduction

Walkability and accessible infrastructure are key factors in urban quality of life. In cities like Boston—ranked 4th nationally in public transit use—it's critical to assess how well pedestrian and cyclist infrastructure meets demand. Our TFI metric combines sidewalk and bike path coverage per unit area, weighted by usage capacity, to identify areas of transit strength and inequity.

## 📊 Data Sources

- **Data.Boston.gov**
  - Existing Bike Network (SHP)
  - BPDA Neighborhood Boundaries (GeoJSON)
- **Mass.gov**
  - Sidewalk Inventory (GeoJSON)

## 🧪 Methodology

- Cleaned and standardized geospatial files using **GeoPandas**
- Calculated sidewalk and bike path **density per neighborhood**
- Developed the **Transit Friendliness Index (TFI)**:
  - Weighted average of sidewalk and bike path coverage
  - Bike paths weighted 3× due to higher person-throughput capacity
- Built visualizations in Python and rendered via a custom HTML page

## 📈 Key Visualizations

- **Bar chart**: Sidewalk and bike path densities by neighborhood
- **Interactive map**: Toggle sidewalk and bike layers to explore infrastructure
- **TFI choropleth**: Hover-enabled map showing transit scores
- **Lollipop chart**: Ranked neighborhood accessibility
- **Scatter plot**: Area vs. TFI to reveal structural access gaps

## 🧭 Findings

- Compact, central neighborhoods like **North End** and **Back Bay** score highest
- Peripheral areas such as **Harbor Island** and **East Boston** show significant gaps
- Larger neighborhoods often have lower TFI due to underdeveloped infrastructure relative to land size
- Infrastructure investments remain uneven, highlighting areas for transit-focused urban planning

## 🌐 View the Website

👉 [Live Demo via GitHub Pages](https://emilyvngu.github.io/Transit-Analysis-Webpage/)

## 📁 File Structure
