import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip, Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const SimpleTable = () => {
  const [copied, setCopied] = useState({}); // Store which row and field was copied

  const rows = [
    { name: 'USDT (TRC-20)', address: '' },
    { name: 'USDT (BEP-20)', address: '' },
    { name: 'BTC', address: '' },
    { name: 'ETH', address: '' },
  ];

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied({ text, field }); // Set copied field and text
      setTimeout(() => setCopied({}), 2000); // Clear "Copied!" after 2 seconds
    });
  };

  return (
    <Box sx={{ maxWidth: '100vw', overflowX: 'auto' }}> {/* Wrapper to allow horizontal scroll on small screens */}
      <TableContainer component={Paper}>
        <Table aria-label="simple table" sx={{ minWidth: 300 }}> {/* Adjust minWidth */}
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell style={{ wordBreak: 'break-all' }}>
                  {row.address}
                  <Tooltip title={copied.field === `address-${index}` ? "Copied!" : "Copy"} arrow>
                    <IconButton
                      onClick={() => handleCopy(row.address, `address-${index}`)}
                      aria-label="copy address"
                      sx={{ ml: 1 }}
                    >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SimpleTable;