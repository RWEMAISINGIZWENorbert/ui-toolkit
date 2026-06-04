// web/src/ui/Dashboard/Reports/PDF/AdminSummaryPDF.jsx
import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { styles } from './PDFStyles.js';

const AdminSummaryPDF = ({ data, payments, occupancy, filter }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* 1. BRANDED HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.brand}>MARKET VENDOR</Text>
          <Text style={{ color: '#64748b' }}>Admin Management System</Text>
        </View>
        <View style={{ textAlign: 'right' }}>
          <Text style={styles.reportTitle}>Business Summary Report</Text>
          <Text style={{ fontSize: 8 }}>Filter: {filter} | Date: {new Date().toLocaleDateString()}</Text>
        </View>
      </View>

      {/* 2. REUSABLE METRICS GRID */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Total Revenue</Text>
          <Text style={styles.statValue}>RWF {data.totalRevenue.toLocaleString()}</Text>
        </View>
        <View style={[styles.statCard, { borderLeftColor: '#22c55e' }]}>
          <Text style={styles.statLabel}>Stall Occupancy</Text>
          <Text style={styles.statValue}>{data.occupancyRate}%</Text>
        </View>
        <View style={[styles.statCard, { borderLeftColor: '#f59e0b' }]}>
          <Text style={styles.statLabel}>Active Vendors</Text>
          <Text style={styles.statValue}>{data.activeVendors}</Text>
        </View>
      </View>

      {/* 3. STALL MATRIX TABLE */}
      <Text style={styles.sectionTitle}>Stall Occupancy Matrix</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.bold]}>Stall</Text>
          <Text style={[styles.tableCell, styles.bold]}>Status</Text>
          <Text style={[styles.tableCell, styles.bold]}>Current Assignee</Text>
        </View>
        {occupancy.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.stall}</Text>
            <Text style={styles.tableCell}>{item.status}</Text>
            <Text style={styles.tableCell}>{item.vendor}</Text>
          </View>
        ))}
      </View>

      {/* 4. REVENUE DETAILS TABLE */}
      <Text style={styles.sectionTitle}>Detailed Revenue Streams</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.bold]}>Vendor</Text>
          <Text style={[styles.tableCell, styles.bold]}>Amount (RWF)</Text>
          <Text style={[styles.tableCell, styles.bold]}>Date</Text>
        </View>
        {payments.map((p, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{p.vendor_id?.name || 'Walk-in'}</Text>
            <Text style={styles.tableCell}>{p.amount.toLocaleString()}</Text>
            <Text style={styles.tableCell}>{new Date(p.createdAt).toLocaleDateString()}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default AdminSummaryPDF;
